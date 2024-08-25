import classes from "./NavBarButton.module.css"

const NavBarButton = (props) => {
    return (
        <div className={classes.Button}>
            <a onClick={() => {props.getCurrentPage(props.pageName)}}>
                <div>
                    <img className={props.pageName === props.currPage ? classes.ImgActive : classes.Img} src={props.Image} height={40}/>
                </div>
                <div className={props.pageName === props.currPage ? classes.ButtonTextActive : classes.ButtonText}>
                    {props.BtnText}
                </div>
            </a>
        </div>
    );
}

export default NavBarButton;