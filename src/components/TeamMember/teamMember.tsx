type TeamMemberProps = {
  name: string;
  role?: string;
};
export const TeamMember = ({ name, role }: TeamMemberProps) => {
  return (
    <div className="flex flex-col text-sm ">
      {name && <p className="font-semibold">{name}</p>}
      {role && <p className="italic"> {role}</p>}
    </div>
  );
};
