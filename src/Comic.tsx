import React, { useEffect, useState }  from 'react';


const Comic: React.FC = () => {
    const [comicData, setComicData] = useState<{
        safe_title?: string;
        day?: number;
        month?: number;
        year?: number;
        img?: string;
        alt?: string;
    }>({});

    useEffect(() => {
        const fetchComic = async () => {
            const email = 'a.turushkina@innopolis.university';
            const params = new URLSearchParams();
            params.append('email', email);

            try {
                const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?${params.toString()}`);
                const id = await idResponse.json();

                const comicParams = new URLSearchParams();
                comicParams.append('id', id);

                const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?${comicParams.toString()}`);
                const comicData = await comicResponse.json();

                setComicData(comicData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchComic();
    }, []);

    const { safe_title, day, month, year, img, alt } = comicData;
    const formattedDate = year && month && day ? new Date(year, month - 1, day).toLocaleDateString() : '';



    return (
        <div style={{ padding: '0 450px', fontFamily: 'DejaVu Sans Mono, monospace' }}>
            <div id="safe_title-container">
                {safe_title && <h1>{safe_title}</h1>}
            </div>
            <div id="date-container">
                {formattedDate && <h2>{formattedDate}</h2>}
            </div>
            <div id="image-container">
                {img && <img src={img} alt={alt} />}
            </div>
            <div id="alt-container">
                {alt && <p>{alt}</p>}
            </div>
        </div>
    );
}


export default Comic;