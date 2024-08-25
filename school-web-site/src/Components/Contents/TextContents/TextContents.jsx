import React, { useState, useEffect } from 'react';
import classes from './TextContents.module.css'

function isEmpty(obj) {
    try {
        return Object.keys(obj).length === 0;
    }
    catch {
        return 1;
    }
}

const TextContents = (props) => {
    const [image, setImage] = useState(null);
    useEffect(() => {
        const loadImage = async () => {
            const response = await fetch(`https://schoolbackend-r4s6.onrender.com/Temp/${props.Image}`, { method: "GET" });
            const blob = await response.blob();
            setImage(URL.createObjectURL(blob));
        };

        loadImage();
    }, [props.Image]);

    return (
        <div className={classes.Container}>
            <div className={classes.HeaderBlock}>
                {props.Header}
            </div>
            <div className={classes.TextBlock}>
                {props.TextInfo}
            </div>
            <div className={classes.ImgContainer}>
                {isEmpty(props.Image) ? `` :
                    <div className={classes.ImgBlock}>
                        <img className={classes.Img} src={image} height={500} />
                        <img className={classes.BgImage} src={image} height={500} />
                    </div>
                }
            </div>
        </div>
    );
}

export default TextContents;