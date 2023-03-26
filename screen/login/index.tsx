'use client'
import { Button, Input } from "@/components"
import { blockChain } from "@/config/image"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"

const Login = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            contact_number: "",
            password: ''
        }
    })

    const onSubmit = (data: { contact_number: string, password: string }) => {
        console.log(data)


    }


    return (
        <Box className='flex items-center flex-wrap h-[100vh]'>
            <Box className="flex-[0.5]">
                <Box className="w-[80%] " style={{ "margin": '0 auto' }}>
                    <Box className="mb-8">
                        <Typography variant='h2'> Login</Typography>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box className='mb-8'>
                            <Controller
                                name="contact_number"
                                control={control}
                                render={({ field }) => <Input
                                    type="number"
                                    label="Contact Number"
                                    placeholder="Please Enter your contact number"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                    InputProps={{ inputProps: { min: 9778888888, max: 9999999999 } }}

                                />} />
                        </Box>
                        <Box className='mb-4'>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <Input
                                    type="password"
                                    label='Password'
                                    placeholder="Please Enter your password"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                />
                                }
                            />
                        </Box>
                        <Box className=' flex justify-between mb-8'>
                            <Box>
                                Remember me
                            </Box>
                            <Box>
                                Forget Password ?
                            </Box>
                        </Box>

                        <Button type='submit' text='Login in' variant='contained' fullWidth size="large" />

                        <Box className="mt-8">
                            Dont Have an account? <Link href='/register'>Sign up</Link>
                        </Box>
                    </form>
                </Box>

            </Box >
            <Box className="flex-[0.5] ">
                <Box className="">
                    <Image
                        alt="image for login"
                        src={blockChain}
                        height={749}
                    />
                </Box>

            </Box>
        </Box >

    )
}

export default Login
