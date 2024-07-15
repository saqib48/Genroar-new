// components/organisms/Dashboard.js
import Container from '../atoms/Container';
import Nav from '../molecules/Nav';

const Dashboard = () => {
    return (
        <Container>
            <div className="flex my-[50px] ">
                <div className='w-[30%]'> <Nav /></div>
                <div className='w-[90%]'>
                    <main className="flex flex-col gap-[15px]">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p>
                            From your account dashboard, you can easily check & view your{' '}
                            <a href="/" className="text-orange-500 hover:underline">recent orders</a>, manage your{' '}
                            <a href="/" className="text-orange-500 hover:underline">shipping and billing addresses</a>, and{' '}
                            <a href="/account-details" className="text-orange-500 hover:underline">edit your password and account details</a>.
                        </p>
                    </main>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;
