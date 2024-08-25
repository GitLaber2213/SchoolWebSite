import classes from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.UnContainer}>
                <div className={classes.PhoneBlock}>
                    <div>
                        Телефон
                    </div>
                    <div>
                        {props.footerInformation.PhoneNumber}
                    </div>
                </div>
                <div className={classes.FaxBlock}>
                    <div>
                        Факс
                    </div>
                    <div>
                        {props.footerInformation.FaxNumber}
                    </div>
                </div>
                <div className={classes.EmailBlock}>
                    <div>
                        Электронная почта
                    </div>
                    <div>
                        {props.footerInformation.EmailAddres}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;