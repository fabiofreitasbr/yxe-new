import ArchiveBlog from "@/app/(padrao)/(blog)/blog/page";

const PaginationBlog = ({params, searchParams}: any) => {
    return(
        <ArchiveBlog params={params} searchParams={searchParams} />
    )
}
export default PaginationBlog;