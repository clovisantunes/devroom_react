declare module "*.module.scss" {
  const value: { [key: string]: string };
  export default value;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.ico" {
  const value: string;
  export default value;
}
