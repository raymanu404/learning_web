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

export { injectHTML };
