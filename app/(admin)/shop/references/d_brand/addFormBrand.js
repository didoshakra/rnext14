const fields = [
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  { name: "username", placeholder: "Enter Username" },
  /** We can ue zod to validate that our value is of type email */
  { name: "email", label: "Почта", placeholder: "Enter email", type: "email" },
  { name: "email", placeholder: "Enter email", type: "email" },
  { name: "email", placeholder: "Enter email", type: "email" },
  { name: "email", placeholder: "Enter email", type: "email" },
  { name: "password", placeholder: "Enter password", type: "password" },
]

export default function AddFormBrand() {
  return (
    // <form className="space-y-5 py-10 max-w-md mx-auto">
    // <form className="max-w-md mx-auto">
    <form className="  max-w-full mx-auto ">
      {/* <h2 className="text-2xl font-bold">Complete the form to sign up</h2> */}
      {/* <div className=" flex space-y-4"> */}
      <div className="  flex-wrap ">
        {fields.map(({ name, placeholder, type, label }) => (
          <div className="grid" key={name}>
            <label htmlFor={name} className="capitalize text-sm">
              {label ?? name}
            </label>
            <input
              name={name}
              placeholder={placeholder}
              type={type ?? "text"}
              className="border p-3 placeholde r:capitalize"
              id={name}
            />
          </div>
        ))}
      </div>
    </form>
  )
}
