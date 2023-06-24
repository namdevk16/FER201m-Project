import Header from "../components/Header";


const NoFooter = ( {children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
 
export default NoFooter;