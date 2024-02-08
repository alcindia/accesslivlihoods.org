import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
} from '@material-tailwind/react';

// import logo from "../images/AlcLogo/AccessLivelihoodsLogo.svg"




function DonateCard() {
  return (
    <Card className="flex w-full max-w-md mx-auto  bg-white p-2 rounded-lg shadow-lg">
      <CardBody>
        {/* <div className="flex items-center justify-center">
          <img
            className="w-svw h-svh rounded-full object-cover"
            src={logo} // Replace with your profile image URL
            alt="Profile"
          />
        </div> */}
      
        <div className="mt-2">
          <Typography variant="paragraph" color="blue-gray" className="text-center">
            In the pursuit of creating an inclusive and empowered society, the importance of women empowerment cannot be overstated. Empowered women contribute significantly to the growth and well-being of communities. However, achieving true gender equality requires collective effort and support. This blog post aims to shed light on the need for women empowerment and invites you to contribute to this noble cause through our donation form.
          </Typography>
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            color="blue"
            onClick={() => window.location.href = 'https://www.linkedin.com/company/access-livelihoods/posts/?feedView=all'}  // profile URL
          >
            View Linkedin
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

function Donate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleDonate = () => {
    // Implement donation logic or call your donation API here
    console.log('Donation submitted:', { name, email, amount });
  };

  return (
    <div className="flex w-full justify-center mt-10">
      <Card className="w-full max-w-md mx-2 bg-white p-2 rounded-lg shadow-lg">
        <DonateCard />
      </Card>
      <Card className="w-full max-w-md mx-2 bg-white p-2 rounded-lg shadow-lg">
        <CardBody>
          <Typography variant="h4" color="blue" className="text-center mb-6">
          Extend Your Support ..
          </Typography>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First & Last Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type Your Email Address"
              />
            </div>

            <div>
              <label htmlFor="amount" className="text-sm font-medium text-gray-600">
                Donation Amount
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 "></span>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="₹ 50"
                />
              </div>
            </div>

            <Button
              onClick={handleDonate}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              We Appreciate Your Support.. Donate Now
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Donate;
