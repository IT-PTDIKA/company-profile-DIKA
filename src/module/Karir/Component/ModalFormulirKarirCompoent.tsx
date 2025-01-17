import React from 'react'
import { Field, Form } from 'react-final-form'
import Input from "@/components/Input";
import {Button, Form as FormANTD, Result} from "antd"
import Modal from '@/components/Modal'
import {ClipLoader} from "react-spinners"
interface IProps {
  handleSubmit: (_vals:any) => void
  onClose: () => void
  initialValues: any
  statusResult: boolean;
  loading: boolean;
}
export default function ModalFormulirKarirCompoent(props:IProps) {
  const {handleSubmit, onClose, initialValues, statusResult, loading} = props

  return (
    <main>
      <Modal open onCancel={onClose} title={`${!loading && statusResult ? "" : "Lengkapi formulir dibawah"}`} width={500} footer={null}>
      <div className="mx-auto w-full rounded-lg">
          {loading && (
            <div className='flex justify-center w-full overflow-y-hidden'>
              <ClipLoader color='#007CCE' loading={loading} size={80} aria-label='Loading Spinner' data-testid="loader" className='mx-auto border-solid border-[#0C2543] border overflow-y-hidden'/>
            </div>
          )}
          {!loading && statusResult && (
              <>
               <div className='w-full'>
                  <h1 className='text-[#0C2543] font-bold text-center md:text-2xl text-xl'>Terima Kasih</h1>
                  <p className='text-[#0C2543] text-center font-normal'>Data anda telah terkirim, tim kami akan menghubungi Anda kembali.</p>
               </div>
              <Result status={"success"} className=' text-[#005E9C]' title="" subTitle="" extra={[
                <Button type="default" size='large' className='bg-[#0C2543] text-[#FFF] text-xl' key={"1"} onClick={onClose}>
                    Kembali
                </Button>
              ]}/>
              </>
          )}
          {!loading && !statusResult && (
            <Form
            keepDirtyOnReinitialize
            onSubmit={handleSubmit}
            initialValues={initialValues}
            subscription={{ values: true }}
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
                            name="code_lowongan"
                            component={Input}
                            className=" w-full"
                            label={<span>Kode Lowongan <span className="text-red-600 text-sm">*</span></span>}
                            isFormItem
                            // inputNumber
                            allowClear
                            disabled
                            showError={dirty}
                          />
                        </div>
                        <div className="w-full -mt-4">
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
                            placeholder="Tuliskan deskripsi singkat tentang diri Anda"
                            label={<span>Deskripsi Diri <span className="text-red-600 text-sm">*</span></span>}
                            className="h-[100px] w-full"
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
          )}
        </div>
      </Modal>
    </main>
  )
}
