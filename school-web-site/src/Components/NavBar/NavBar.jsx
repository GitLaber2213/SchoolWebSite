import classes from "./NavBar.module.css"
import NavBarButton from "./NavBarButtons/NavBarButton";
import MainImage from '../../Res/Главная.png';
import ourSchool from '../../Res/НашаШкола.png';
import independentAssessmentQualityEducation from '../../Res/НезависимаяОценкаКачестваОбразования.png';
import forTeachersAndStudents from '../../Res/ПедагогамИУченикам.png';
import forParentsAndStudents from '../../Res/РодителямИУченикам.png';
import informationAboutTheEducationalOrganization from '../../Res/СведенияОбОбразовательнойОрганизации.png';

const NavBar = (props) => {
    return (
        <div className={classes.Container} >
            <NavBarButton pageName={"mainPage"} currPage={props.currPage} getCurrentPage={props.getCurrentPage} Image={MainImage} BtnText="Главная"/>
            <NavBarButton pageName={"forParentsAndStudents"} currPage={props.currPage} getCurrentPage={props.getCurrentPage} Image={forParentsAndStudents} BtnText="Родителям и ученикам"/>
            <NavBarButton pageName={"ourSchool"} currPage={props.currPage} getCurrentPage={props.getCurrentPage} Image={ourSchool} BtnText="Наша школа"/>
            <NavBarButton pageName={"forTeachersAndStudents"} currPage={props.currPage} getCurrentPage={props.getCurrentPage} Image={forTeachersAndStudents} BtnText="Педагогам"/>
            <NavBarButton pageName={"informationAboutTheEducationalOrganization"} currPage={props.currPage} getCurrentPage={props.getCurrentPage} Image={informationAboutTheEducationalOrganization} BtnText="Сведение об образовательной организации"/>
            <NavBarButton pageName={"independentAssessmentQualityEducation"} currPage={props.currPage} getCurrentPage={props.getCurrentPage} Image={independentAssessmentQualityEducation} BtnText="Независимая оценка качества образования"/>
        </div>
    );
}

export default NavBar;
    