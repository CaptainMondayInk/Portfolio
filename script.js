<script>
  window.addEventListener('load', () => {
    const anchor = document.getElementById('anchor-bunnies');

    if (anchor) {
      const rect = anchor.getBoundingClientRect();

      const absoluteTop = rect.top + window.scrollY;
      const absoluteLeft = rect.left + window.scrollX;

      floater.style.position = 'absolute';
      floater.style.left = `${x}px`;
      floater.style.top = `${y}px`;

      console.log('X (from left):', rect.left);
      console.log('Y (from top):', rect.top);
      console.log('Width:', rect.width);
      console.log('Height:', rect.height);
    }
  });
</script>
