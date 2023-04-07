//declaring event

contract MyContract {
    event MyEvent(address indexed sender, uint256 value);

    // Emiting events

    function myFunction(uint256 _value) public {
        emit MyEvent(msg.sender, _value);
    }
}

contract SampleToken {
    event Transfer(address indexed from, address indexed to, uint256 value);
    mapping(address => uint256) public balances;

    function transfer(address _to, uint256 _value) public {
        require(balances[msg.sender] >= _value, "Insufficient balance");
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
    }
}
