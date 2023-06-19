import Card from "../../card/Card"

interface ResumeProps {
    path: string;
}

const ResumeCard = (props: ResumeProps) => {
    return (<Card name={"Resume"} path={props.path} />)
}

export default ResumeCard;