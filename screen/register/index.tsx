'use client'
import { Button, Input } from "@/components"
import { blockChain } from "@/config/image"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import { Controller, useForm } from "react-hook-form"

const Register = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            middleName: "",
            lastName: "",
            email: '',
            contact_number: "",
            password: '',
            // gender: '',
            // dob: ""

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
                        <Typography variant='h2'> Register</Typography>
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box className='mb-8'>
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => <Input
                                    type="text"
                                    label="First Name"
                                    placeholder="Please Enter your first name"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth


                                />} />
                        </Box>
                        <Box className='mb-4'>
                            <Controller
                                name="middleName"
                                control={control}
                                render={({ field }) => <Input
                                    type="text"
                                    label='Middle Name'
                                    placeholder="Please Enter your middle name"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                />
                                }
                            />
                        </Box>

                        <Box className='mb-4'>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => <Input
                                    type="text"
                                    label='Last Name'
                                    placeholder="Please Enter your last name"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                />
                                }
                            />
                        </Box>

                        <Box className='mb-4'>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <Input
                                    type="email"
                                    label='Email'
                                    placeholder="Please Enter your email"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                />
                                }
                            />
                        </Box>

                        <Box className='mb-4'>
                            <Controller
                                name="contact_number"
                                control={control}
                                render={({ field }) => <Input
                                    type="number"
                                    label='Contact Number'
                                    placeholder="Please Enter your contact number"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                    InputProps={{ inputProps: { min: 9778888888, max: 9999999999 } }}
                                />
                                }
                            />
                        </Box>

                        <Box className='mb-4'>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <Input
                                    type="text"
                                    label='Password'
                                    placeholder="Please Enter your password"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                // InputProps={{ inputProps: { min: 9778888888, max: 9999999999 } }}
                                />
                                }
                            />
                        </Box>
                        <Box className='mb-4'>
                            <Controller
                                name="contact_number"
                                control={control}
                                render={({ field }) => <Input
                                    type="number"
                                    label='Contact Number'
                                    placeholder="Please Enter your contact number"
                                    error={false}
                                    variant='outlined'
                                    required={true}
                                    {...field}
                                    fullWidth
                                    InputProps={{ inputProps: { min: 9778888888, max: 9999999999 } }}
                                />
                                }
                            />
                        </Box>
                        <Button type='submit' text='Sign up' variant='contained' fullWidth size="large" />
                    </form>
                </Box>

            </Box>
            <Box className="flex-[0.5] ">
                <Box className="">
                    <Image
                        alt="image for Register"
                        src={blockChain}
                        height={749}
                    />
                </Box>

            </Box>
        </Box>

    )
}

export default Register
