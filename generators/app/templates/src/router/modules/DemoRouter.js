const Demo = () =>
  import(
    /* webpackChunkName: "Demo" */ "@/pages/demo/Demo"
  );

const DemoRouter = {
  path: "/",
  name: "Demo",
  component: Demo,
  meta: { keepAlive: true },
};

export default DemoRouter;
