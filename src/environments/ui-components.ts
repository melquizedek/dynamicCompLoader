import { ProfileHkComponent } from "../app/components/profile-hk/profile-hk/profile-hk.component";
import { AddComponent } from "../app/classes/add-component";

export const componentList = {
    ProfileHkComponent: new AddComponent(ProfileHkComponent, {name: 'John Doe', country: 'HK'})
}