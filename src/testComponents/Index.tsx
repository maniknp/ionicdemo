
interface ContainerProps {
    children?: React.ReactNode;
}

const IndexTestComponent: React.FC<ContainerProps> = ({children}) => {
    return (
        <div id="container">
            <p>index text component </p>
            {children}
        </div>
    );
};

export default IndexTestComponent;
