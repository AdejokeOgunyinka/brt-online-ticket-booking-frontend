import moment from "moment";
import { FormikProvider, useFormik } from "formik";
import { Button, Input, LoadingPage } from "../components";
import { useGetProfile } from "../services/api/queries/auth";
import { useUpdateProfile } from "../services/api/mutations/profile";

export const Profile = () => {
  const { data, isLoading } = useGetProfile();
  const { mutate, isLoading: isUpdatingProfile } = useUpdateProfile();

  const ProfileFormik = useFormik({
    initialValues: {
      firstname: data.firstname,
      lastname: data.lastname,
      phone_number: data.phone_number,
      username: data.username,
      email: data.email,
      brt_card_number: data.brt_card_number,
      created_at: data.createdAt,
    },
    enableReinitialize: true,
    onSubmit: (res) => {
      const { created_at, ...rest } = res;
      mutate({ payload: rest, userId: data.id });
    },
  });

  const userData = [
    {
      key: "First name",
      value: ProfileFormik.values.firstname,
      name: "firstname",
      disable: false,
      error: ProfileFormik.errors.firstname,
      touched: ProfileFormik.touched.firstname,
    },
    {
      key: "Last name",
      value: ProfileFormik.values.lastname,
      name: "lastname",
      disable: false,
      error: ProfileFormik.errors.lastname,
      touched: ProfileFormik.touched.lastname,
    },
    {
      key: "BRT card number",
      value: ProfileFormik.values.brt_card_number,
      name: "brt_card_number",
      disable: true,
      error: ProfileFormik.errors.brt_card_number,
      touched: ProfileFormik.touched.brt_card_number,
    },
    {
      key: "Phone number",
      value: ProfileFormik.values.phone_number,
      name: "phone_number",
      disable: true,
      error: ProfileFormik.errors.phone_number,
      touched: ProfileFormik.touched.phone_number,
    },
    {
      key: "Username",
      value: ProfileFormik.values.username,
      name: "username",
      disable: false,
      error: ProfileFormik.errors.username,
      touched: ProfileFormik.touched.username,
    },
    {
      key: "Email address",
      value: ProfileFormik.values.email,
      name: "email",
      disable: true,
      error: ProfileFormik.errors.email,
      touched: ProfileFormik.touched.email,
    },
    {
      key: "Date joined",
      value: moment(ProfileFormik.values.created_at).format("MMM Do, YYYY"),
      name: "created_at",
      disable: true,
      error: ProfileFormik.errors.created_at,
      touched: ProfileFormik.touched.created_at,
    },
  ];

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="w-full px-3 xl:px-[20%] 2xl:px-[40%] py-20">
          <FormikProvider value={ProfileFormik}>
            <form onSubmit={ProfileFormik.handleSubmit} className="grid gap-4">
              <div className="w-full border border-buttonBorder">
                {userData?.map(
                  (data: {
                    name: string;
                    key: string;
                    value: string;
                    disable: boolean;
                    error: any;
                    touched: any;
                  }) => (
                    <div
                      key={data.key}
                      className="w-full py-5 px-3 lg:px-5 gap-2 flex flex-col items-center lg:flex-row border border-b-buttonBorder border-t-transparent border-l-transparent border-r-transparent"
                    >
                      <h3 className="w-full lg:w-1/4">{data.key}</h3>
                      <div className="w-full lg:w-3/4">
                        <Input
                          type={data.key === "Email address" ? "email" : "text"}
                          name={data.name}
                          value={data.value}
                          onChange={ProfileFormik.handleChange}
                          disabled={data.disable}
                          error={data.error}
                          onBlur={ProfileFormik.handleBlur}
                          showError={data.touched}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>

              <Button
                variant={"primary"}
                name={"Update Profile"}
                isLoading={isUpdatingProfile}
                type="submit"
              />
            </form>
          </FormikProvider>
        </div>
      )}
    </>
  );
};
