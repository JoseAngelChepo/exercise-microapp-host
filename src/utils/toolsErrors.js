const toolsErrors = {}

toolsErrors.retry = async (fn, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      console.log(e)
      if (i === retries - 1) throw e;
    }
  }
}

export default toolsErrors;