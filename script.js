]// Função para carregar o JSON de arquivos e pastas
async function loadDirectory() {
    try {
        const response = await fetch('files.json'); // Carrega o JSON
        const files = await response.json(); // Converte em objeto

        renderDirectory(files); // Renderiza a lista
    } catch (error) {
        console.error('Erro ao carregar o diretório:', error);
    }
}

// Função para renderizar a lista de arquivos e pastas
function renderDirectory(files) {
    const directoryList = document.getElementById('directory-list');
    directoryList.innerHTML = ''; // Limpa o conteúdo

    files.forEach(item => {
        const listItem = document.createElement('li');

        const icon = document.createElement('span');
        icon.className = 'icon';
        icon.innerHTML = item.type === 'file' ? '📄' : '📁';

        const link = document.createElement('a');
        link.href = item.type === 'file' ? item.name : `${item.name}/`;
        link.textContent = item.name;

        listItem.appendChild(icon);
        listItem.appendChild(link);
        directoryList.appendChild(listItem);
    });
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', loadDirectory);
