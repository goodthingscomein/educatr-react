import React from 'react';

// Import custom component
import Message from '../messages-page/message/message.components';

// Render Component
const MessagesTemplate: React.FC = () => (
	<>
		<Message ourMessage hasMessageAbove>
			This is first message in the array.
		</Message>
		<Message ourMessage hasMessageAbove hasMessageBelow>
			This is second message in the array.
			<br />
			<br />
			This message is longer and has multiple lines, as sometimes, people like to send longer messages broken into
			paragraphs.
		</Message>
		<Message ourMessage hasMessageAbove hasMessageBelow>
			This is third message in the array.
		</Message>
		<Message ourMessage hasMessageBelow>
			This is fourth message in the array.
		</Message>
		<Message hasMessageAbove>This is first message in the array.</Message>
		<Message hasMessageAbove hasMessageBelow>
			This is second message in the array.
			<br />
			<br />
			This message is longer and has multiple lines, as sometimes, people like to send longer messages broken into
			paragraphs.
		</Message>
		<Message hasMessageAbove hasMessageBelow>
			This is third message in the array.
		</Message>
		<Message hasMessageBelow>This is fourth message in the array.</Message>
		<Message ourMessage hasMessageAbove>
			This is first message in the array.
		</Message>
		<Message ourMessage hasMessageAbove hasMessageBelow>
			This is second message in the array.
			<br />
			<br />
			This message is longer and has multiple lines, as sometimes, people like to send longer messages broken into
			paragraphs.
		</Message>
		<Message ourMessage hasMessageAbove hasMessageBelow>
			This is third message in the array.
		</Message>
		<Message ourMessage hasMessageBelow>
			This is fourth message in the array.
		</Message>
		<Message hasMessageAbove>This is first message in the array.</Message>
		<Message hasMessageAbove hasMessageBelow>
			This is second message in the array.
			<br />
			<br />
			This message is longer and has multiple lines, as sometimes, people like to send longer messages broken into
			paragraphs.
		</Message>
		<Message hasMessageAbove hasMessageBelow>
			This is third message in the array.
		</Message>
		<Message hasMessageBelow>This is fourth message in the array.</Message>
		<Message ourMessage hasMessageAbove>
			This is first message in the array.
		</Message>
		<Message ourMessage hasMessageAbove hasMessageBelow>
			This is second message in the array.
			<br />
			<br />
			This message is longer and has multiple lines, as sometimes, people like to send longer messages broken into
			paragraphs.
		</Message>
		<Message ourMessage hasMessageAbove hasMessageBelow>
			This is third message in the array.
		</Message>
		<Message ourMessage hasMessageBelow>
			This is fourth message in the array.
		</Message>
		<Message hasMessageAbove>This is first message in the array.</Message>
		<Message hasMessageAbove hasMessageBelow>
			This is second message in the array.
			<br />
			<br />
			This message is longer and has multiple lines, as sometimes, people like to send longer messages broken into
			paragraphs.
		</Message>
		<Message hasMessageAbove hasMessageBelow>
			This is third message in the array.
		</Message>
		<Message hasMessageBelow>This is fourth message in the array.</Message>
	</>
);

export default MessagesTemplate;
