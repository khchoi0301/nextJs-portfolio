import Layout from "../components/Layout";

export default ({ statusCode }) => {
    return (
        <Layout title="Error!!!">
            {statusCode
                ? `Could not load your data : Status Code ${statusCode}`
                : `Couldn't get that page, sorry!`}
        </Layout>
    )
}