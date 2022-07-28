import React from "react";
import Tag from "./Tag";

export default function MerchandiseInfo(props) {
    const data = props.data[0].data[0]

    const tags = data.tags.map((tagContent, idx) => {
        return <Tag content={tagContent} key={tagContent + idx}/>
    })

    return (
        <div className="info-container">
            <img src={data.image} alt="merchandise" />
            <h2>{data.title}</h2>
            <p>{data.subtitle}</p>
            
            <div className="tag-container">
                {tags}
            </div>

        </div>
    )
}
