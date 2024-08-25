import classes from "./Header.module.css"

const Header = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.UnContainer}>
                <div className={classes.Icon}>
                    <img className={classes.Img} src="https://cdn-icons-png.flaticon.com/512/562/562157.png" height={50} />
                </div>
                <div className={classes.ContainerTitles}>
                    <div className={classes.HeaderTitle}>
                        МКОУ "Волчихинская средняя школа №2"
                    </div>
                    <div className={classes.HeaderUnderTitle}>
                        Алтайский край -{">"} Волчихинский район -{">"} с. Волчиха
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;