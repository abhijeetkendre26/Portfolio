// script.js
const wrapper = document.querySelector('.wrapper');

function generateSocialIcons() {
  wrapper.innerHTML = ""; // Clear existing content

  socialNetworks.forEach(network => {
    // Create the list item
    const li = document.createElement('li');
    li.className = `icon ${network.id}`;
    
    // Create the tooltip span
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = network.name;
    
    // Create the icon span and i tag
    const iconSpan = document.createElement('span');
    const icon = document.createElement('i');
    icon.className = network.icon;
    
    // Assemble the parts
    iconSpan.appendChild(icon);
    li.appendChild(tooltip);
    li.appendChild(iconSpan);
    
    // Make the whole circle clickable
    li.addEventListener('click', () => {
      window.open(network.link, '_blank');
    });

    // Add to the wrapper
    wrapper.appendChild(li);
  });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', generateSocialIcons);

