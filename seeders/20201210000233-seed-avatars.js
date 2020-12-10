"use strict";

const avatars = [
  { avatar: "https://netflux-avatars.s3.amazonaws.com/man.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-1.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-10.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-11.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-12.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-13.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-14.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-15.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-16.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-17.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-18.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-19.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-2.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-20.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-21.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-22.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-3.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-4.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-5.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-6.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-7.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-8.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user-9.svg" },
  { avatar: "https://netflux-avatars.s3.amazonaws.com/user.svg" },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("avatars", avatars);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("avatars");
  },
};
