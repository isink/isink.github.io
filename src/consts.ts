import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "暮光回响",
  EMAIL: "handwanly@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "首页",
  DESCRIPTION: "文瀚冬的个人学习笔记与项目记录。",
};

export const BLOG: Metadata = {
  TITLE: "笔记",
  DESCRIPTION: "关于开发、工具与日常思考的一些记录。",
};

export const WORK: Metadata = {
  TITLE: "经历",
  DESCRIPTION: "这些年做过的事情。",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "个人做过的产品与开源小玩具。",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/isink",
  },
];
