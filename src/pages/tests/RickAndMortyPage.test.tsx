import { render, screen } from "@testing-library/react";
import RickAndMortyPage from "../RickAndMortyPage";
import { RouterProvider, createMemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

import { mockCharacters } from "./mock";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { routerConfig } from "../../components/rick-and-morty/Common/types";

type Page = [page: string];
type PageWithId = [page: string, testId: string];
type LinkWithId = [link: string, testId: string];
type PageWithIdAndLink = [page: string, testId: string, link: string];

const server = setupServer(
  rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockCharacters));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

const setup = (path: string) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries: [path],
  });
  render(<RouterProvider router={router} />);
};
describe("Rick and Morty page", () => {
  test("renders header as Rick and Morty", () => {
    render(<RickAndMortyPage />);
    const header = screen.getByRole("heading", { name: "Rick and Morty" });
    expect(header).toBeInTheDocument();
  });

  it.each<Page>([["Characters"], ["Locations"], ["Episodes"]])(
    "renders %s subpage",
    (page) => {
      render(<RickAndMortyPage />);
      const characters = screen.getByText(page);
      expect(characters).toBeInTheDocument();
    }
  );

  it.each<PageWithIdAndLink>([
    ["Characters", "rm-characters", "/characters"],
    ["Locations", "rm-locations", "/locations"],
    ["Episodes", "rm-episodes", "/episodes"],
  ])("displays %s page with rm-episodes", (page, testId, link) => {
    setup(link);
    const dataTestId = screen.queryByTestId(testId!);
    expect(dataTestId).toBeInTheDocument();
  });

  it.each<PageWithId>([
    ["Characters", "rm-characters"],
    ["Locations", "rm-locations"],
    ["Episodes", "rm-episodes"],
  ])("clicks %s after display %s test id", async (page, testId) => {
    setup("/");
    const link = screen.queryByRole("link", { name: page });
    act(() => {
      userEvent.click(link!);
    });
    const itemTestId = await screen.findByTestId(testId!);
    expect(itemTestId).toBeInTheDocument();
  });

  describe("Characters page", () => {
    it("displays Character 1 on the first load", async () => {
      setup("/characters");
      const character1 = await screen.findByText("Character 1");
      expect(character1).toBeInTheDocument();
    });

    xit("displays next page button", () => {
      setup("/characters");
      const nextButton = screen.getByRole("button", { name: "next >" });
      expect(nextButton).toBeInTheDocument();
    });

    xit("loads next page after click next page button", async () => {
      setup("/characters");
      const character1 = await screen.findByText("Character 1");
      expect(character1).toBeInTheDocument();
      const nextButton = screen.getByRole("button", { name: "next >" });
      act(() => {
        userEvent.click(nextButton);
      });
      const character5 = await screen.findByText("Character 5");
      expect(character5).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });
  });
});
