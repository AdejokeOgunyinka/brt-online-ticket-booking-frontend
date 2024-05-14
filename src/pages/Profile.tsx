import { FormikProvider, useFormik } from "formik";
import { Button, Input, LoadingPage } from "../components";
import { useGetProfile } from "../services/api/queries/auth";
import moment from "moment";

export const Profile = () => {
  const { data, isLoading } = useGetProfile();

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
    onSubmit: () => {},
  });

  const userData = [
    {
      key: "First name",
      value: ProfileFormik.values.firstname,
      name: "firstname",
      disable: false,
    },
    {
      key: "Last name",
      value: ProfileFormik.values.lastname,
      name: "lastname",
      disable: false,
    },
    {
      key: "BRT card number",
      value: ProfileFormik.values.brt_card_number,
      name: "brt_card_number",
      disable: true,
    },
    {
      key: "Phone number",
      value: ProfileFormik.values.phone_number,
      name: "phone_number",
      disable: true,
    },
    {
      key: "Username",
      value: ProfileFormik.values.username,
      name: "username",
      disable: false,
    },
    {
      key: "Email address",
      value: ProfileFormik.values.email,
      name: "email",
      disable: true,
    },
    {
      key: "Date joined",
      value: moment(ProfileFormik.values.created_at).format("MMM Do, YYYY"),
      name: "created_at",
      disable: true,
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
                {userData?.map((data: any) => (
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
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Button variant={"primary"} name={"Update Profile"} />
            </form>
          </FormikProvider>
        </div>
      )}
    </>
  );
};
