
import { useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const { title, price, _id } = useLoaderData();

    const handlePlaceorder = event => {
        const form = event.target;
        const name = `${form.fname.value} ${form.lname.value}`
        const phone = form.phone.value;
        const email = form.email.value;
        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            phone,
            email
        }


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('user-token')}`


            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowladged) {
                    alert("Order Placed")
                    form.reset();
                }
            })
            .catch(er => console.error(er))

    }
    return (
        <div>
            <div className='mt-16'>
                <h2 className='text-4xl'>{title}</h2>
                <h4 className='text-2xl'>Price: ${price}</h4>
            </div>
            <form onSubmit={handlePlaceorder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-8'>
                    <input type="text" name='fname' placeholder="First Name"
                        className="input input-bordered input-error w-full" />
                    <input type="text" name='lname' placeholder="Last Name"
                        className="input input-bordered input-error w-full" />
                    <input type="text" name='phone' placeholder="Phone Number"
                        className="input input-bordered input-error w-full" required />
                    <input type="text" name='email' placeholder="Email"
                        className="input input-bordered input-error w-full" />
                </div>
                <input className='btn bg-orange-600 mb-5' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default Checkout;