import classes from "./Contents.module.css"
import Links from "./TextContents/Links";
import TextContents from "./TextContents/TextContents";

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const Contents = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.UnContainer}>
            {props.state.currPage === "forParentsAndStudents" ? <Links /> : ``}
            {props.state.currPage === "forTeachersAndStudents" ? <Links /> : ``}
            {isEmpty(props.state.informationPages) ? `` : props.state.informationPages.map(el => <TextContents Header={el.Header} TextInfo={el.TextInfo} Image={el.Image} />)}
            </div>
        </div>
    );
}

export default Contents;