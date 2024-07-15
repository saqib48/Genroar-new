// components/layouts/DashboardLayout.js
import Container from '../atoms/Container';
import Nav from '../molecules/Nav';

const DashboardLayout = ({ children }) => {
    return (
        <Container>
            <div className="flex my-[50px] justify-between w-[100%]">
                <div className="w-[25%]">
                    <Nav />
                </div>
                <div className="w-[80%]">
                    <main className="flex flex-col">{children}</main>
                </div>
            </div>
        </Container>
    );
};

export default DashboardLayout;
