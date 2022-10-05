import ProfilesGenerator from "./ProfilesGenerator";

const FakeProfiles = new ProfilesGenerator({
  numberOfProfiles: 10000,
  pathToSave: './datasets/profiles'
})

FakeProfiles.generateProfiles()