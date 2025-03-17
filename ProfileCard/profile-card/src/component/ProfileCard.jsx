
import { useState } from "react";
function ProfileCard() {
const [name, setName] = useState("Deji");
return (
<div>
<h2>Name: {name}</h2>
<button onClick={() => setName("Catherine")}>Change Name</button>
</div>
);
}
export default ProfileCard;