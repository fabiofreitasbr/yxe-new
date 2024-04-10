import axios from "axios";

export default async function ContentArtigos({params, searchParams} : any) {
    const search = (searchParams.s) ? searchParams.s : "";
    const slug = (params.slug) ? params.slug : null;
    const page = (params.page) ? params.page : null;
    const artigos = await axios.get('http://localhost:4000/artigos', {
        params: {
            search,
            slug,
            page
        }
    });
    return artigos;
}