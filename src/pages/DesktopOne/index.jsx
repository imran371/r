import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Arham's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start h-[1440px] w-full pb-12 bg-white-A700">
        <header className="flex flex-row justify-center items-center w-full p-2.5 rounded-bl-[5px] rounded-br-[5px] bg-gradient">
          <div className="flex flex-row justify-center w-full mt-[3px] mx-auto max-w-[1299px]">
            <div className="flex flex-row justify-center items-center w-full gap-[37px]">
              <div className="flex flex-row justify-between items-center w-[85%]">
                <div className="flex flex-row justify-between w-[35%]">
                  <div className="h-10 w-[45%] relative">
                    <div className="flex flex-row justify-start items-center w-[83%] left-[1%] top-[3%] m-auto absolute">
                      <Img src="images/img_basil_login_solid.svg" alt="basillogin_one" className="h-[35px] w-[35px]" />
                      <a href="#">
                        <Heading as="h5">Staff Login</Heading>
                      </a>
                    </div>
                    <div className="justify-center h-10 w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border border-solid absolute rounded-[5px]" />
                  </div>
                  <a href="#">
                    <div className="flex flex-row justify-start items-start w-[45%] gap-[15px] border-white-A700 border border-solid rounded-[5px]">
                      <Img src="images/img_vector.svg" alt="vector_one" className="h-[30px] mb-1.5" />
                      <div className="h-[25px] w-[49%] mt-[3px] text-white-A700 text-left text-xl font-bold">
                        Register
                      </div>
                    </div>
                  </a>
                </div>
                <a href="#">
                  <div className="flex flex-row justify-start items-center w-[16%] gap-[21px] p-1 border-white-A700 border border-solid rounded-[5px]">
                    <Img src="images/img_material_symbols_login.svg" alt="material_one" className="h-[30px] ml-[7px]" />
                    <div className="h-[25px] w-[34%] text-white-A700 text-left text-xl font-bold">Login</div>
                  </div>
                </a>
              </div>
              <a href="#">
                <div className="flex flex-row justify-start items-center w-[14%] gap-[17px] p-1 border-white-A700 border border-solid rounded-[5px]">
                  <Img src="images/img_material_symbols_help.svg" alt="material_three" className="h-[30px] ml-[5px]" />
                  <Heading as="h5">Help</Heading>
                </div>
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full gap-[33px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img src="images/img_image_1.png" alt="imageone_one" className="w-[43%] z-[1] object-cover" />
              <Img src="images/img_image_2.png" alt="imagetwo_one" className="w-full mt-[-126px] object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[58%] py-[15px] border-green-600 border-2 border-solid bg-white-A700 shadow-xs rounded-[15px]">
            <div className="flex flex-col items-center justify-start w-full mb-[22px]">
              <a href="#">
                <Heading size="s" as="h1" className="!text-green-900_01">
                  Register
                </Heading>
              </a>
              <div className="h-px w-full bg-green-900_02 shadow-xs" />
              <div className="flex flex-row justify-start items-center w-full mt-[43px] gap-[29px] max-w-[807px]">
                <div className="flex flex-col items-start justify-start w-[31%]">
                  <Input name="edittext" className="w-full border-green-900_02 border" />
                  <Input name="edittext_one" className="w-full mt-[73px] border-green-900_01 border" />
                  <Input name="edittext_two" className="w-full mt-16 border-green-900_01 border" />
                  <Input name="edittext_three" className="w-full mt-[153px] border-green-900_02 border" />
                  <Text as="p" className="mt-[34px]">
                    Property No.
                  </Text>
                  <Input name="edittext_four" className="w-full mt-[13px] border-green-900_02 border" />
                </div>
                <div className="flex flex-col items-start justify-start w-[67%]">
                  <Button color="white_A700" size="xs" className="border-white-A700 border-[3px] min-w-[245px]">
                    Create Account
                  </Button>
                  <div className="flex flex-row justify-between w-[98%] mt-[81px]">
                    <Input name="edittext_five" className="w-[48%] border-green-900_01 border" />
                    <Input name="edittext_six" className="w-[48%] border-green-900_01 border" />
                  </div>
                  <div className="flex flex-row justify-between w-full mt-[72px]">
                    <Input name="edittext_seven" className="w-[46%] border-green-900_01 border" />
                    <Input name="edittext_eight" className="w-[46%] border-green-900_01 border" />
                  </div>
                  <Input name="edittext_nine" className="w-[46%] mt-[67px] ml-[7px] border-green-900_01 border" />
                  <Input
                    size="sm"
                    name="additional"
                    placeholder="Additional Details"
                    className="w-[46%] mt-[43px] ml-[7px] text-black-900 border-white-A700 border-[3px]"
                  />
                  <div className="flex flex-row justify-between items-center w-[99%] mt-[23px] ml-[7px]">
                    <Input name="edittext_ten" className="w-[47%] border-green-900_02 border" />
                    <div className="flex flex-col items-start justify-start w-[47%] gap-[13px]">
                      <Text as="p">PAN No.</Text>
                      <Input name="edittext_eleven" className="w-full border-green-900_02 border" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-[68%] mt-[31px] ml-[7px]">
                    <Text as="p" className="mt-px">
                      Address
                    </Text>
                    <Text as="p">Pincode</Text>
                  </div>
                  <div className="flex flex-row justify-between w-full mt-4 ml-[5px]">
                    <Input name="address" className="w-[47%] border-green-900_02 border" />
                    <Input name="pincode" className="w-[47%] border-green-900_02 border" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full mt-[51px] max-w-[608px]">
                <Button className="border-gray-800 border min-w-[223px]">Login</Button>
                <Button className="border-gray-800_01 border min-w-[209px]">Register</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
