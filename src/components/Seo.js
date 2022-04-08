import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ()=> {
    return (
        <HelmetProvider>
            <Helmet
                htmmlAttibutes={{lang: 'ko'}}
                title={'title'}
                meta={[
                    {"name": "'(사)한국건축물해체기술연구원", "content": "'(사)한국건축물해체기술연구원"},
                    {
                        property: 'og:title',
                        content: '(사)한국건축물해체기술연구원'
                    },
                    {
                        property: 'og:description',
                        content: 'description'
                    },
                    {
                        property: 'og:image',
                        content: 'image'
                    },
                    {
                        property: 'og:url',
                        content: ''
                    },
                ]}/>
        </HelmetProvider>
    );
}

export default Seo;