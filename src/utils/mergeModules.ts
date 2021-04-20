const mergeModules = (...modules: any) => {
  return {
    pages: modules.reduce((acc: any, { pages }: any) => (pages ? [...acc, ...pages] : acc), []).sort((a: any, b: any) => a.order - b.order),
    reducers: modules.reduce((acc: any, { reducers }: any) => (reducers ? { ...acc, ...reducers } : acc), {}),
    sagas: modules.reduce((acc: any, { sagas }: any) => (sagas ? [...acc, ...sagas] : acc), []),
  };
};

export default mergeModules;
