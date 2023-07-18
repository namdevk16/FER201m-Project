import NewHeader from "../components/NewHeader";


const NoFooter = ( {children }) => {
    return (
        <>
            <NewHeader />
            {children}
        </>
    );
}
 
export default NoFooter;