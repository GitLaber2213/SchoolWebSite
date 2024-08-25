const fs = require('fs');
const bodyParser = require('body-parser');

function deleteTempFiles() {
    const path = './Temp/';

    fs.readdir(path, (err, items) => {
        for (let i = 0; i < items.length; i++) {
            const file = path + '\\' + items[i];
            (file => fs.stat(file, (err, stats) => {
                try
                {
                    if (!stats.isFile()) return
                    fs.unlinkSync(file, err => console.log(err))
                }
                catch {
                    //
                }
            }))(file);
        }
    });
}

function getRandomFileName() {
    var timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    var random = ("" + Math.random()).substring(2, 8);
    var random_number = timestamp + random;
    return random_number;
}

function getCurrPageJson(mainJSON) {
    deleteTempFiles();
    let json = JSON.parse(mainJSON);
    let readyJSON = [];
    let filename, currPath = ""
    selectedJSON = json.map(el => {
        if (!el.Image == "") {
            filename = getRandomFileName();
            currPath = './Temp/' + filename + 'image.png';
            fs.writeFileSync(currPath, el.Image, { encoding: 'base64' });
        }
        readyJSON.push({
            Header: el.Header,
            TextInfo: el.TextInfo,
            Image: filename

        })
        filename = "";
    })
    reverseJSON = readyJSON.reverse()
    return reverseJSON;
}

function getFooterJson(footerJSON) {
    let json = JSON.parse(footerJSON);
    let readyJSON = [];

    json.map(el => {
        readyJSON.push({
            PhoneNumber: el.PhoneNumber,
            FaxNumber: el.FaxNumber,
            EmailAddres: el.EmailAddres
        });
    });

    return readyJSON;
}


module.exports = function (app) {
    app.use(bodyParser.json());

    app.get('/Temp/:imageId', (req, res) => {
        const imageId = req.params.imageId;
        const imagePath = `./Temp/${imageId}image.png`;

        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.status(404).send('Файл не найден');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(data);
            }
        });
    });


    app.post('/', (req, res) => {
        const mainJSON = fs.readFileSync("files/Главная.json")
        const forParentsAndStudentsJSON = fs.readFileSync("files/РодителямИУченикам.json")
        const ourSchoolJSON = fs.readFileSync("files/НашаШкола.json")
        const independentAssessmentQualityEducationJSON = fs.readFileSync("files/НезависимаяОценкаКачествоОбразования.json")
        const forTeachersAndStudentsJSON = fs.readFileSync("files/ПедагогамИУченикам.json")
        const informationAboutTheEducationalOrganizationJSON = fs.readFileSync("files/СведенияОбОбразовательнойОрганизации.json")
        const footerJSON = fs.readFileSync("files/КонтактнаяИнформацияШколы.json")
        const pagesReceiveData = req.body.PageName;
        const footerReceiveData = req.body.GiveMeFooter;

        switch (pagesReceiveData) {
            case "mainPage":
                res.json(getCurrPageJson(mainJSON));
                break;
            case "forParentsAndStudents":
                res.json(getCurrPageJson(forParentsAndStudentsJSON));
                break;
            case "ourSchool":
                res.json(getCurrPageJson(ourSchoolJSON));
                break;
            case "independentAssessmentQualityEducation":
                res.json(getCurrPageJson(independentAssessmentQualityEducationJSON));
                break;
            case "forTeachersAndStudents":
                res.json(getCurrPageJson(forTeachersAndStudentsJSON));
                break;
            case "informationAboutTheEducationalOrganization":
                res.json(getCurrPageJson(informationAboutTheEducationalOrganizationJSON));
                break;
        }

        switch (footerReceiveData) {
            case "GiveMeFooter":
                res.json(getFooterJson(footerJSON));
                break;
        }
    });
}