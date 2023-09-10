import ScreenLayout from "../layouts/ScreenLayout";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    Typography,
    Input,
    Checkbox,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from '@material-tailwind/react';
import React, { useState } from "react";
import { FaUser, FaUsers } from 'react-icons/fa';

function AuthScreen() {
    const data = [
        {
            label: "Register",
            value: "register",
            renderCom: RegisterPage
        },
        {
            label: "Login",
            value: "login",
            renderCom: LoginPage
        },
    ];

    return (
        <ScreenLayout>
            <Tabs value="login">
                <TabsHeader className="bg-[#082032]"
                    indicatorProps={{
                        className:
                            "bg-[#334756]",
                    }}>
                    {data.map(({ label, value }) => (
                        <Tab className="text-white" key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, renderCom }) => (
                        <TabPanel key={value} value={value}>
                            {React.createElement(renderCom)}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </ScreenLayout>
    );
}

function LoginPage() {
    const [openDialog, setOpenDialog] = useState(false);
    const handleDialog = () => setOpenDialog(!openDialog);
    return (
        <>
            <Dialog className="bg-[#2C394B]" open={openDialog} handler={handleDialog}>
                <DialogHeader>
                    <Typography color="white" className="font-bold text-xl" as="h1">
                        Recovery Password
                    </Typography>
                </DialogHeader>
                <DialogBody>
                    <Input color="white" label="Email" />
                </DialogBody>
                <DialogFooter>
                    <div className="text-left w-full">
                        <Button color="light-green">Send Email</Button>
                    </div>
                </DialogFooter>
            </Dialog>
            <div className="flex justify-center items-center flex-col gap-4">
                <Typography className="text-center" variant="h4" color="white">
                    Login
                </Typography>

                <form className="w-3/4 flex flex-col gap-4 justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-full gap-2">
                        <Input color="white" size="lg" label="Email" />
                        <Input color="white" type="password" size="lg" label="Password" />
                    </div>

                    <Button color="deep-orange" className="w-fit" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" as="p">
                        Forget Your Password?
                        <Button onClick={() => setOpenDialog(true)} className="bg-transparent" style={{ boxShadow: 'none' }}>
                            Click Here
                        </Button>
                    </Typography>
                </form>

            </div>
        </>
    )
}

function RegisterPage() {
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <Typography className="text-center" variant="h4" color="white">
                Register
            </Typography>

            <form className="w-3/4 flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-col justify-center items-center w-full gap-2">
                    <Input color="white" size="lg" label="Username" />
                    <Input color="white" size="lg" label="Email" />
                    <Input color="white" type="password" size="lg" label="Password" />
                </div>

                <Button color="deep-orange" className="w-fit" fullWidth>
                    Register
                </Button>
            </form>

        </div>
    );
}

export default AuthScreen;