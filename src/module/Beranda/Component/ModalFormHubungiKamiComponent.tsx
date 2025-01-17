import React from 'react'
import Modal from '@/components/Modal'
import {Button, Form as FormANTD, Result} from "antd"
import { Field, Form } from 'react-final-form'
import Input from "@/components/Input";
import {ClipLoader} from "react-spinners"
interface IProps {
  onClose: () => void
  handleSubmit: (_vals:any) => void
  isLoading: boolean;
  statusResult: boolean;
}
export default function ModalFormHubungiKamiComponent(props: IProps) {
  const {onClose, handleSubmit, isLoading, statusResult} = props
  return (
    <main>
        <Modal open onCancel={onClose} title={`${!isLoading && statusResult ? "" : "Hubungi Kami"}`} width={600} footer={null} className={`${isLoading ? "" : "max-h-[90vh]"}`}>
        <div className={`${isLoading ? "" : "mx-auto w-full rounded-lg !h-full"}`}>
          {isLoading && (
            <div className='flex justify-center w-full overflow-y-hidden'>
              <ClipLoader color='#007CCE' loading={isLoading} size={80} aria-label='Loading Spinner' data-testid="loader" className='mx-auto border-solid border-[#0C2543] border overflow-y-hidden'/>
            </div>
          )}
          {!isLoading && statusResult && (
              <>
               <div className='w-full'>
                  <h1 className='text-[#0C2543] font-bold text-center md:text-2xl text-xl'>Terima Kasih</h1>
                  <p className='text-[#0C2543] text-center font-normal'>Data anda telah terkirim, tim kami akan menghubungi Anda kembali.</p>
               </div>
              <Result status={"success"} className=' text-[#005E9C]' title="" subTitle="" extra={[
                <Button type="default" size='large' className='bg-[#0C2543] text-[#FFF] text-xl' key={"1"} onClick={onClose}>
                    Kembali Ke Beranda
                </Button>
              ]}/>
              </>
          )}
          {!isLoading && !statusResult && (
             <>
            <p className='text-[#0C2543] text-lg text-justify py-2 leading-none'>Temukan solusi outsourcing terbaik untuk kebutuhan bisnis Anda! Isi formulir di bawah ini, dan tim kami akan segera menghubungi Anda.</p>
            <Form
              keepDirtyOnReinitialize
              onSubmit={handleSubmit}
              // subscription={{ values: true }}
            >
              {(formProps) => {
                const { handleSubmit, dirty, form, invalid } = formProps
            
                return (
                  <FormANTD
                    layout="vertical"
                    onFinish={handleSubmit}
                  >
                    <div className="w-full bg-gray-100 p-5 h-auto rounded-md">
                      <div className="w-full flex flex-col items-center justify-center pt-3">
                          <div className="w-full">
                            <Field
                              name="nama_lengkap"
                              component={Input}
                              className="w-full"
                              label={<span>Nama Lengkap <span className="text-red-600 text-sm">*</span></span>}
                              placeholder="Isi Nama Lengkap"
                              isFormItem
                              allowClear
                              showError={dirty}
                            />
                          </div>
                          <div className="w-full -mt-4">
                            <Field
                              name="nama_perusahaan"
                              component={Input}
                              className="w-full"
                              label={<span>Nama Perusahaan <span className="text-red-600 text-sm">*</span></span>}
                              placeholder="Isi Nama Perusahaan"
                              isFormItem
                              allowClear
                              showError={dirty}
                            />
                          </div>
                          <div className="w-full flex justify-between gap-2 md:gap-0">
                            <Field
                              name="email"
                              component={Input}
                              label={<span>Email <span className="text-red-600 text-sm">*</span></span>}
                              isFormItem
                              allowClear
                              placeholder="Isi Alamat Email"
                              className="w-full"
                              showError={dirty}
                            />
                            <Field
                              name="phone"
                              component={Input}
                              label={<span>No. Handpone <span className="text-red-600 text-sm">*</span></span>}
                              isFormItem
                              placeholder="No. Handphone"
                              className="w-full"
                              showError={dirty}
                            />
                          </div>
                          <div className="!w-full">
                            <Field
                              name="pesan"
                              component={Input}
                              placeholder="Tulis Pesan Anda"
                              label={<span>Tulis Pesan Anda <span className="text-red-600 text-sm">*</span></span>}
                              className="h-[50px] w-full"
                              isFormItem
                              allowClear
                              textArea
                              showError={dirty}
                            />
                          </div>
                      </div>
                      <div className="flex justify-center w-full">
                        <Button
                          htmlType="submit"
                          onMouseEnter={() => false}
                          // disabled={invalid}
                          className=" mx-auto text-white bg-[#0C2543] w-1/3"
                        >
                          kirim
                        </Button>
                      </div>
                    </div>
                  </FormANTD>
                )
              }}
            </Form>
            </>
          )}
        </div>
      </Modal>
    </main>
  )
}
