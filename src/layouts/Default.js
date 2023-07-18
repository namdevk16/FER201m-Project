import Footer from "../components/Footer";
import NewHeader from "../components/NewHeader";


const Default = ( { children }) => {
    return (
        <>
            <NewHeader />
            {children}
            <Footer />
        </>
    );
}
 
export default Default;