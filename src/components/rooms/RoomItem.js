/* eslint-disable arrow-body-style */
import React from 'react';
import TimeAgo from 'timeago-react';
import ProfileAvatar from '../ProfileAvatar';

const RoomItem = ({ room }) => {
  const { createdAt, name, lastMessage } = room;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center ">
        <h3 className="text-disappear">{name}</h3>
        <TimeAgo
          className="font-normal text-black-45"
          datetime={
            lastMessage
              ? new Date(new Date(lastMessage.createdAt))
              : new Date(new Date(createdAt))
          }
        />
      </div>
      <div className="d-flex align-items-center text-black-70">
        {lastMessage ? (
          <div>
            <div className="d-flex align-items-center">
              <ProfileAvatar
                src={lastMessage.author.avatar}
                name={lastMessage.author.name}
                size="sm"
              />
            </div>
            <div className="text-disappear ml-2">
              <div className="italic">{lastMessage.author.name}</div>
              <span>{lastMessage.text || lastMessage.file.name}</span>
            </div>
          </div>
        ) : (
          <span>No messages yet for now...</span>
        )}
      </div>
    </>
  );
};

export default RoomItem;
