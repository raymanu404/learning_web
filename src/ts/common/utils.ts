// Fetch the HTML file and inject its content
async function injectHTML(
  filePath: string,
  targetElement: HTMLTemplateElement | null,
) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load HTML file: ${response.statusText}`);
    }

    const htmlContent = await response.text(); // Get HTML as string

    if (targetElement) {
      const contentConvertedStart = htmlContent.search('script');
      const HtmlContentConverted = htmlContent.slice(
        0,
        contentConvertedStart - 1,
      );
      targetElement.innerHTML = HtmlContentConverted.toString(); // Inject into innerHTML
    }
  } catch (error) {
    console.error('Error injecting HTML:', error);
  }
}

const parseStringToBoolean = (str: string) => {
  return str.toLowerCase() === 'true';
};

const getRouteQueryParams = (searchValue: string): string[] => {
  const { search } = window.location;
  const searchParsed = search.replace('?', '');
  const searchedSplit = searchParsed.split('&');
  const dialogParamPairKey = searchedSplit
    .map((x) => {
      const [key, value] = x.split('=');
      if (key.includes(searchValue)) {
        return [key, value];
      }
    })
    .flat()
    .filter((x) => x !== undefined);

  return dialogParamPairKey;
};

const injectQueryParams = (queryKey: string, value: any) => {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  searchParams.set(queryKey, value);

  // Update the browser's URL without reloading
  history.pushState({}, '', `${url.pathname}?${searchParams.toString()}`);
};

export {
  injectHTML,
  parseStringToBoolean,
  getRouteQueryParams,
  injectQueryParams,
};
