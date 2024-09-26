// Claim reward logic
async function claimReward() {
    const walletAddress = document.getElementById('walletAddress').value;
  
    if (walletAddress === '') {
      alert('Please enter your wallet address.');
      return;
    }
  
    try {
      // Dymension Faucet API URL
      const response = await fetch('https://dymension-burcukale-faucet.vercel.app/api/claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ address: walletAddress })
      });
  
      const data = await response.json();
  
      if (data.success) {
        document.getElementById('rewardStatus').innerText = 'Reward Claimed!';
      } else {
        document.getElementById('rewardStatus').innerText = 'Failed to claim reward.';
      }
    } catch (error) {
      console.error('Error claiming reward:', error);
      document.getElementById('rewardStatus').innerText = 'Error claiming reward.';
    }
  }
  