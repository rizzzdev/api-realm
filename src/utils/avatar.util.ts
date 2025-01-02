const avatarUrlList: { male: string[]; female: string[] } = {
  male: [
    "/profile-avatar/male/avatar-male-1.jpeg",
    "/profile-avatar/male/avatar-male-2.jpeg",
    "/profile-avatar/male/avatar-male-3.jpeg",
    "/profile-avatar/male/avatar-male-4.jpeg",
    "/profile-avatar/male/avatar-male-5.jpeg",
    "/profile-avatar/male/avatar-male-6.jpeg",
    "/profile-avatar/male/avatar-male-7.jpeg",
    "/profile-avatar/male/avatar-male-8.jpeg",
    "/profile-avatar/male/avatar-male-9.jpeg",
    "/profile-avatar/male/avatar-male-10.jpeg",
    "/profile-avatar/male/avatar-male-11.jpeg"
  ],
  female: [
    "/profile-avatar/female/avatar-female-1.jpeg",
    "/profile-avatar/female/avatar-female-2.jpeg",
    "/profile-avatar/female/avatar-female-3.jpeg",
    "/profile-avatar/female/avatar-female-4.jpeg",
    "/profile-avatar/female/avatar-female-5.jpeg",
    "/profile-avatar/female/avatar-female-6.jpeg",
    "/profile-avatar/female/avatar-female-7.jpeg",
    "/profile-avatar/female/avatar-female-8.jpeg",
    "/profile-avatar/female/avatar-female-9.jpeg",
    "/profile-avatar/female/avatar-female-10.jpeg"
  ]
};

const avatarShuffle = (gender: "MALE" | "FEMALE") => {
  if (gender === "MALE") {
    const randomIndex = Math.floor(Math.random() * avatarUrlList.male.length);
    return avatarUrlList.male[randomIndex];
  } else {
    const randomIndex = Math.floor(Math.random() * avatarUrlList.female.length);
    return avatarUrlList.female[randomIndex];
  }
};

export default avatarShuffle;
