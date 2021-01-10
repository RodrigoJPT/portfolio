import React, {useEffect, useState} from 'react';

const TechUsed = ({project}) => {
    const [icons, setIcons] = useState(null);

    useEffect(()=>{
        fetch('/media/icons.json')
        .then(res => res.json())
        .then(data => project.tech.map(name => data[name]))
        .then(data => setIcons(data));
    }, [])

    if (!icons){
        return null;
    }
    return (
        <div className='tech-used'>
            {icons.map((url, index) => {
                return <img key={index} src={url}/>
            })}
        </div>
    );
};

export default TechUsed;