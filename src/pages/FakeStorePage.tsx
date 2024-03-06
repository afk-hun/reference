import AuthContextProvider from "../components/fake-store/auth-context";
import { Provider } from "react-redux";
import { store } from "../components/fake-store/store/store";
import { FakeStore } from "../components/fake-store/FakeStore";

export default function FakeStorePage() {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <FakeStore />
      </Provider>
    </AuthContextProvider>
  );
}
